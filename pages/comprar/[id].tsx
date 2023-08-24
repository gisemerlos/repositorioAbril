import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import { plans } from "@/src/planes/components/PlansSection";
import { useRouter } from "next/router";
import { z } from "zod";

const schema = z.object({
  id: z.coerce.number().min(0).max(2),
});

const comprar = () => {
  const router = useRouter();
  const query = schema.safeParse(router.query);

  if (!query.success) {
    return <div>error</div>;
  }

  const id = query.data.id;
  const item = plans[id];

  return (
    <Container
      style={{
        marginTop: "4rem",
      }}
    >
      <Typography textAlign={"center"} variant="h4" className="title">
        Solo falta un paso...
      </Typography>
      <Card
        elevation={4}
        style={{
          marginTop: "2rem",
        }}
      >
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
                Comprar
              </Button>
            </CardActions>
          </Box>
        </Stack>
      </Card>
    </Container>
  );
};

export default comprar;
