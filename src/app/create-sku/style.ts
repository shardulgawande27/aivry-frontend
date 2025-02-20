import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  margin: auto;
`;

export const Title = styled.h2`
  text-align: left;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .form-input-section {
    display: flex;
    justify-content: space-between;
    gap: 56px;
    margin-bottom: 32px;
  }

  .left-section {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 32px;
  }
  .right-section {
    width: 50%;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const FileInputLabel = styled.label`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed white;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  text-align: center;

  span {
    margin-top: 8px;
    font-size: 14px;
    color: white;
  }
`;

export const HiddenFileInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const ImagePreview = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-top: 10px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const Message = styled.p`
  text-align: center;
  font-size: 14px;
  color: green;
`;
