"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import SidebarLayout from "../../sidebar-layout/layout";
import {
  SkuDetailContainer,
  ImageContainer,
  InfoContainer,
  SkuTitle,
  SkuText,
} from "./style";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface SKU {
  id: string;
  name: string;
  image_url: string;
  quantity: number;
  threshold: number;
}

const data = [
  { month: "January", 2024: 4000, 2025: 2400 },
  { month: "February", 2024: 3000, 2025: 1398 },
  { month: "March", 2024: 2000, 2025: 9800 },
  { month: "April", 2024: 2780, 2025: 3908 },
  { month: "May", 2024: 1890, 2025: 4800 },
  { month: "June", 2024: 2390, 2025: 3800 },
  { month: "July", 2024: 3490, 2025: 4300 },
];

interface SkuDetailsPageProps {
  params: {
    id: string;
  };
}

const page = ({ params }: SkuDetailsPageProps) => {
  const { id } = params;
  const [sku, setSku] = useState<SKU | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkuDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://aivry-backend.vercel.app/api/skus/get-skus?id=${id}`
        );
        setSku(data);
      } catch (error) {
        console.error("Error fetching SKU details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkuDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!sku) return <p>SKU not found</p>;

  return (
    <SidebarLayout>
      <SkuDetailContainer>
        {/* Left Section: Image */}
        <div className="top-section">
          <ImageContainer>
            <img src={sku.image_url} alt={sku.name} />
          </ImageContainer>

          {/* Right Section: SKU Info */}
          <InfoContainer>
            <SkuTitle>{sku.name}</SkuTitle>
            <SkuText>Quantity: {sku.quantity}</SkuText>
            <SkuText>Threshold: {sku.threshold}</SkuText>
          </InfoContainer>
        </div>
        <div className="chart-section">
          <>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={730}
                height={250}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="2024"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
                <Area
                  type="monotone"
                  dataKey="2025"
                  stroke="#82ca9d"
                  fillOpacity={1}
                  fill="url(#colorPv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </>
        </div>
      </SkuDetailContainer>
    </SidebarLayout>
  );
};

export default page;
