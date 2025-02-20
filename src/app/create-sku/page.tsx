"use client";

import React, { useState } from "react";
import styled from "styled-components";
import SidebarLayout from "../sidebar-layout/layout";
import {
  Button,
  Container,
  FileInputLabel,
  Form,
  HiddenFileInput,
  ImagePreview,
  Input,
  Message,
  Title,
} from "./style";
import { FiPlus } from "react-icons/fi";

const page = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [threshold, setThreshold] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("quantity", quantity);
    formData.append("threshold", threshold);
    if (image) formData.append("image", image);

    try {
      const res = await fetch(
        `https://aivry-backend.vercel.app/api/skus/create`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setMessage("SKU created successfully!");
      setName("");
      setQuantity("");
      setThreshold("");
      setImage(null);
      setImagePreview(null);
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SidebarLayout>
      <Container>
        <Title>Create SKU</Title>
        <Form onSubmit={handleSubmit}>
          <div className="form-input-section">
            <div className="left-section">
              <Input
                type="text"
                placeholder="SKU Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
              <Input
                type="number"
                placeholder="Threshold Value"
                value={threshold}
                onChange={(e) => setThreshold(e.target.value)}
                required
              />
            </div>
            <div className="right-section">
              <FileInputLabel>
                <FiPlus size={24} color="white" />
                <span>Upload Image</span>

                <HiddenFileInput
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
              </FileInputLabel>
              {imagePreview && (
                <ImagePreview src={imagePreview} alt="Preview" />
              )}
            </div>
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create SKU"}
          </Button>
          {message && <Message>{message}</Message>}
        </Form>
      </Container>
    </SidebarLayout>
  );
};

export default page;
