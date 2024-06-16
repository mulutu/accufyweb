
import ContactUsForm from "@/components/ContactUsForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const ContactUs = () => {
  return (
    <section className="flex w-full">
      <MaxWidthWrapper className="flex  flex-col w-full justify-center items-center pb-10">
        <ContactUsForm />
      </MaxWidthWrapper>
    </section>
  );
};

export default ContactUs;
