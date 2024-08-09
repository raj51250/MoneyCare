import React, { useState } from "react";
import "../styles/FQ.css";

const FQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of debt can Moneytor care help me with?",
      answer:
        "Most of your unsecured debts (not backed by collateral) can be enrolled. If the majority of your debt load consists of personal loans.",
    },
    {
      question: "What is Debt Settlement?",
      answer:
        "Debt settlement is a process where you negotiate with your creditors to pay a lump sum that is less than the full amount you owe.",
    },
    {
      question: "How does settlement affect my credit score?",
      answer:
        "Settlement can negatively impact your credit score as it indicates that you did not pay the full amount owed.",
    },
    {
      question: "What is NPA (Non Performing Asset)?",
      answer: "NPA refers to loans or advances that are in default or arrears.",
    },
    {
      question: "What is FOIR (Fixed Obligation to Income Ratio)?",
      answer:
        "FOIR is a measure of an individual's fixed monthly obligations as a percentage of their monthly income.",
    },
    {
      question: "What is the difference between Collection and Counseling?",
      answer:
        "Collection involves recovering overdue payments, while counseling provides advice and strategies for managing debt.",
    },
    {
      question: "How to build Debt Settlement?",
      answer:
        "Building debt settlement involves negotiating with creditors to reduce the total amount owed and setting up a payment plan.",
    },
    {
      question: "How to stop Creditors' calls?",
      answer:
        "You can stop creditors' calls by negotiating a payment plan, seeking legal advice, or using debt settlement services.",
    },
    {
      question: "How much does Debt Settlement cost?",
      answer:
        "The cost of debt settlement varies but typically involves a percentage of the settled debt amount.",
    },
    {
      question: "What is a good Credit Score?",
      answer:
        "A good credit score typically ranges from 670 to 739, indicating a lower risk to lenders.",
    },
  ];

  return (
    <div className="title1">
      <h2>FAQs</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="arrow">{activeIndex === index ? "▲" : "▼"}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FQ;
