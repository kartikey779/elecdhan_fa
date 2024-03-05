// PaginationComponent.js
import React from 'react';
import { Pagination } from 'react-bootstrap';

const CustomPagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageItems = [];

  for (let number = 1; number <= totalPages; number++) {
    pageItems.push(
      <Pagination.Item 
        key={number} 
        active={number === currentPage}
        onClick={() => onPageChange(number)}
      >
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <Pagination>
      {pageItems}
    </Pagination>
  );
};

export default CustomPagination;
