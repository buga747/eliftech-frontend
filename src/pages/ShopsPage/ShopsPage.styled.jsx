import styled from 'styled-components';

export const Container = styled.div`
  max-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const ShopList = styled.div`
  flex-basis: 30%;
`;

export const ProductList = styled.div`
  flex-basis: 70%;
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

export const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
