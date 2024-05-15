import React from "react";
import { Table } from "react-bootstrap";
import "./PortfolioTable.css"; // Import the CSS file
import {
  portfolioHeaders,
  portfolioRows,
  tableHeaders,
  tableRows,
} from "../../portfolio"; // Import table data

const PortfolioTable = ({ theme }) => {
  return (
    <>
      <h2
        className="portfolio-header"
        style={{
          "--text-color": theme.text,
        }}
      >
        Portfolio Table Of Activities
      </h2>
      <div
        className="custom-table-wrapper"
        style={{
          "--body-bg": theme.body,
          "--text-color": theme.text,
        }}
      >
        <div className="custom-table-container">
          <Table bordered className="custom-table" variant={theme.variant}>
            <thead>
              <tr>
                {portfolioHeaders.map((header, idx) => (
                  <th key={idx}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {portfolioRows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <td key={colIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default PortfolioTable;
