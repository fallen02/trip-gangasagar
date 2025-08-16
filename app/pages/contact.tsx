import { Container } from "@/components/Container";
import { ContactInfo } from "@/components/ContactInfo";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact Us" />.
      <Container className="p-0 lg:p-15 flex flex-col lg:flex-row gap-5 lg:gap-10">
        <ContactForm />
        <ContactInfo />
      </Container>
    </>
  );
}
