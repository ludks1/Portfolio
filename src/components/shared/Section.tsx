import { Box } from "@mui/material";
import { SectionProps } from "../../types/SectionProps";

export default function Section({ children, ref }: SectionProps) {
  return <Box ref={ref}>{children}</Box>;
}
