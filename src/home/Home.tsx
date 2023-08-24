import { Container, Stack } from "@mui/material";
import BuildFastSection from "@/src/components/BuildFastSection";
import CustomerSuportSection from "@/src/components/CustomerSuportSection";
import MainSection from "@/src/components/MainSection";
import OnlineSaleSection from "@/src/components/OnlineSaleSection";
import PlansSection from "@/src/components/PlansSection";
import StepsToDeploySection from "@/src/components/StepsToDeploySection";
import TemplateCustomSection from "@/src/components/TemplateCustomSection";

const Home = () => {
  return (
    <>
      <Container maxWidth={false}>
        <MainSection />
      </Container>

      <Container maxWidth={false} className="background-light">
        <Container>
          <Stack spacing={8} py={8}>
            <PlansSection />
            <StepsToDeploySection />
            <BuildFastSection />
            <CustomerSuportSection />
            <OnlineSaleSection />
            <TemplateCustomSection />
          </Stack>
        </Container>
      </Container>
    </>
  );
};

export default Home;
