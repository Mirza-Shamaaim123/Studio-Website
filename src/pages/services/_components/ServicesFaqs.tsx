
import type React from "react"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { Link } from "react-router-dom"

// Define the types for our FAQ items
interface FAQItem {
  question: string
  answer: string
}

// Define the props for our component
interface ServicesFAQProps {
  title?: string
  subtitle?: string
  faqItems: FAQItem[]
  onSendMessage?: () => void
  onScheduleCall?: () => void
}

const ServicesFAQ: React.FC<ServicesFAQProps> = ({
  title = "We got you.",
  subtitle = "ANY QUESTIONS?",
  faqItems,
  onSendMessage,
  onScheduleCall,
}) => {
  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First item open by default

  // Toggle FAQ item
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="parent-services-faq-unique-container">
        <div className="services-faq-unique-container">
      <div className="services-faq-unique-header">
        <p className="services-faq-unique-subtitle">{subtitle}</p>
        <h2 className="services-faq-unique-title">{title}</h2>
      </div>

      <div className="services-faq-unique-items">
        {faqItems.map((item, index) => (
          <div key={index} className="services-faq-unique-item">
            <div className="services-faq-unique-question" onClick={() => toggleFAQ(index)}>
              <h3>{item.question}</h3>
              <button className="services-faq-unique-toggle">
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>
            </div>

            {openIndex === index && (
              <div className="services-faq-unique-answer">
                <p>{item.answer}</p>
              </div>
            )}
            <div className="services-faq-unique-divider"></div>
          </div>
        ))}
      </div>

      <div className="services-faq-unique-actions">
        <Link to={'/contact'} className="services-faq-unique-button services-faq-unique-primary" onClick={onSendMessage}>
          <span className="services-faq-unique-button-icon"></span>
          SEND A MESSAGE
        </Link>
        <button className="services-faq-unique-button services-faq-unique-secondary" onClick={onScheduleCall}>
          <span className="services-faq-unique-button-icon"></span>
          SCHEDULE A CALL
        </button>
      </div>
    </div>
    </div>
  )
}

export default ServicesFAQ
