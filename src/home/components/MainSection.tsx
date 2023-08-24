import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import styles from "./MainSection.module.css";

const MainSection = () => {
  const title = "Vos queres crecer.\n Nosotros te queremos ayudar";
  const subtitle =
    "Crea una web con plantillas impecables, fácil edición y sin codificación.";

  return (
    <Container>
      <Box className={styles.BoxGridTemplateAreas}>
        <Box className={styles.BoxTitle}>
          <Typography variant="h3" className="">
            {title}
          </Typography>
        </Box>
        <Box className={styles.BoxSubtitle}>
          <Typography variant="h5">{subtitle}</Typography>
        </Box>
        <Box className={styles.BoxButton}>
          <Button variant="contained">Comienza a crear</Button>
        </Box>

        <Box className={styles.BoxImage} />
      </Box>
    </Container>
  );
};

export default MainSection;
