import { Container } from "@mui/material";
import PlansSection from "@/src/planes/components/PlansSection";

const Plans = () => {
  return (
    <>
      <Container
        sx={{ mt: "16vh" }}
        maxWidth={false}
        className="background-light"
      >
        <Container>
          <PlansSection />
        </Container>
      </Container>
    </>
  );
};

export default Plans;
