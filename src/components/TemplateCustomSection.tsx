import { Grid } from "@mui/material";
import React from "react";
import CardSection from "./CardSection";
import Image from "next/image";

const templates: string[] = [
  "https://picsum.photos/800/1200",
  "https://picsum.photos/800/1200",
  "https://picsum.photos/800/1200",
];

const TemplateCustomSection = () => {
  return (
    <CardSection
      title="Plantillas totalmente personalizables"
      subtitle="Plantillas creadas para satisfacer tus necesidades. Elige una plantilla y edita cualquier cosa: cambia colores, fuentes, imágenes y más. No se necesitan habilidades de codificación."
      justContent
    >
      <Grid container spacing={2} height={400}>
        {templates.map((template, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            key={index}
            sx={{
              position: "relative",
              height: "100%",
            }}
          >
            <Image
              src={template}
              alt="Demo de una web dedicada a la indumentaria"
              fill
            />
          </Grid>
        ))}
      </Grid>
    </CardSection>
  );
};

export default TemplateCustomSection;
