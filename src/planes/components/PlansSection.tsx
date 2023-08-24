import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";

// api plans
// https://mocki.io/v1/819ad59a-d91e-45dd-9820-30f2939b3e34

const usePlans = async (): Promise<Plan[]> => {
  const plans = await fetch(
    "https://mocki.io/v1/819ad59a-d91e-45dd-9820-30f2939b3e34"
  );
  const json = await plans.json();
  return json["plans"];
};

type Plan = {
  title: string;
  description: string;
  price: number;
  hrefSelectPlan: string;
  hrefViewMore: string;
};

const GridPlans = ({ plans }: { plans: Plan[] }) => {
  return (
    <Grid container spacing={4}>
      {plans.map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card elevation={4}>
            <Stack
              height={{
                sm: "418px",
                md: "420px",
              }}
              padding={".5rem"}
              justifyContent={"space-between"}
            >
              <CardHeader title={item.title} subheader={item.description} />
              <Box>
                <CardContent>
                  <Typography variant="caption">Desde</Typography>
                  <Typography variant="h4" className="title">
                    {`AR$ ${item.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00`}
                  </Typography>
                  <Typography variant="caption">/mes</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    className="button contained"
                    href={item.hrefSelectPlan}
                  >
                    Seleccionar
                  </Button>
                  <Button
                    variant="text"
                    className="button button-text"
                    href={item.hrefViewMore}
                  >
                    Ver más
                  </Button>
                </CardActions>
              </Box>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const PlansSection = () => {
  const query = useQuery<Plan[], Error>({
    queryKey: ["plans"],
    queryFn: usePlans,
  });

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error</div>;
  }

  return (
    <Box marginTop={"4rem"}>
      <Typography textAlign={"center"} variant="h4" className="title">
        Elije el plan que mejor te convenga
      </Typography>
      {query.isSuccess && <GridPlans plans={query.data} />}
      <br />
    </Box>
  );
};

export default PlansSection;
