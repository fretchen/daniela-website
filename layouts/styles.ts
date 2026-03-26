import { css } from "../styled-system/css";

// ===== LAYOUT =====

export const layout = {
  main: css({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "100vh",
  }),
  content: css({
    flex: 1,
  }),
  appbar: css({
    width: "100%",
    paddingY: "sm",
    paddingX: "md",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid token(colors.border)",
    backgroundColor: "light",
    position: "sticky",
    top: 0,
    zIndex: 100,
    "@media (max-width: 768px)": {
      padding: "sm",
    },
  }),
  navLinks: css({
    display: "flex",
    gap: "md",
    alignItems: "center",
    "@media (max-width: 480px)": {
      gap: "sm",
    },
  }),
  navLink: css({
    fontSize: "sm",
    fontWeight: "medium",
    color: "text",
    textDecoration: "none",
    transition: "color 0.2s",
    _hover: {
      color: "brand",
      textDecoration: "none",
    },
  }),
  siteName: css({
    fontSize: "lg",
    fontWeight: "bold",
    color: "text",
    textDecoration: "none",
    fontFamily: "heading",
    _hover: {
      color: "brand",
      textDecoration: "none",
    },
  }),
};

// ===== SECTIONS =====

export const section = {
  wrapper: css({
    maxWidth: "900px",
    mx: "auto",
    px: "md",
    py: "2xl",
    "@media (max-width: 768px)": {
      py: "xl",
      px: "md",
    },
  }),
  wrapperAlt: css({
    maxWidth: "900px",
    mx: "auto",
    px: "md",
    py: "2xl",
    backgroundColor: "light",
    "@media (max-width: 768px)": {
      py: "xl",
      px: "md",
    },
  }),
  fullWidth: css({
    width: "100%",
    backgroundColor: "light",
  }),
  fullWidthAlt: css({
    width: "100%",
    backgroundColor: "background",
  }),
  heading: css({
    fontSize: "2xl",
    fontWeight: "bold",
    marginBottom: "lg",
    color: "text",
    fontFamily: "heading",
    textAlign: "center",
    "@media (max-width: 768px)": {
      fontSize: "xl",
    },
  }),
};

// ===== HERO =====

export const hero = {
  banner: css({
    position: "relative",
    width: "100%",
    minHeight: "500px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 768px)": {
      minHeight: "400px",
    },
  }),
  bannerImage: css({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  }),
  overlay: css({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  }),
  container: css({
    position: "relative",
    textAlign: "center",
    py: "2xl",
    maxWidth: "900px",
    mx: "auto",
    px: "md",
    zIndex: 1,
    "@media (max-width: 768px)": {
      py: "xl",
    },
  }),
  photo: css({
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid token(colors.brand)",
    marginBottom: "lg",
    "@media (max-width: 768px)": {
      width: "140px",
      height: "140px",
    },
  }),
  photoPlaceholder: css({
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    backgroundColor: "border",
    border: "4px solid token(colors.brand)",
    marginBottom: "lg",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mx: "auto",
    fontSize: "3xl",
    color: "muted",
    "@media (max-width: 768px)": {
      width: "140px",
      height: "140px",
    },
  }),
  title: css({
    fontSize: "3xl",
    fontWeight: "bold",
    marginBottom: "sm",
    fontFamily: "heading",
    color: "light",
    "@media (max-width: 768px)": {
      fontSize: "2xl",
    },
  }),
  subtitle: css({
    fontSize: "lg",
    color: "light",
    marginBottom: "lg",
    maxWidth: "600px",
    mx: "auto",
    lineHeight: "1.6",
    "@media (max-width: 768px)": {
      fontSize: "md",
    },
  }),
  cta: css({
    display: "inline-block",
    paddingY: "md",
    paddingX: "xl",
    backgroundColor: "brand",
    color: "light",
    borderRadius: "md",
    fontWeight: "bold",
    fontSize: "md",
    textDecoration: "none",
    transition: "all 0.2s ease",
    border: "none",
    cursor: "pointer",
    _hover: {
      backgroundColor: "accent",
      transform: "translateY(-2px)",
      textDecoration: "none",
    },
  }),
};

// ===== ABOUT =====

export const about = {
  content: css({
    display: "flex",
    gap: "xl",
    alignItems: "center",
    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "lg",
      textAlign: "center",
    },
  }),
  photo: css({
    width: "250px",
    height: "300px",
    borderRadius: "md",
    objectFit: "cover",
    flexShrink: 0,
    border: "2px solid token(colors.border)",
    "@media (max-width: 768px)": {
      width: "200px",
      height: "240px",
    },
  }),
  photoPlaceholder: css({
    width: "250px",
    height: "300px",
    borderRadius: "md",
    backgroundColor: "border",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4xl",
    color: "muted",
    border: "2px solid token(colors.border)",
    "@media (max-width: 768px)": {
      width: "200px",
      height: "240px",
    },
  }),
  text: css({
    flex: 1,
    lineHeight: "1.8",
    color: "text",
  }),
  highlight: css({
    display: "flex",
    gap: "lg",
    marginTop: "lg",
    flexWrap: "wrap",
    "@media (max-width: 768px)": {
      justifyContent: "center",
    },
  }),
  highlightItem: css({
    textAlign: "center",
    minWidth: "100px",
  }),
  highlightNumber: css({
    fontSize: "2xl",
    fontWeight: "bold",
    color: "brand",
    display: "block",
  }),
  highlightLabel: css({
    fontSize: "sm",
    color: "muted",
  }),
};

// ===== SERVICES =====

export const services = {
  grid: css({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "lg",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "md",
    },
  }),
  card: css({
    backgroundColor: "light",
    borderRadius: "md",
    padding: "lg",
    textAlign: "center",
    border: "1px solid token(colors.border)",
    transition: "all 0.2s ease",
    _hover: {
      transform: "translateY(-4px)",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
    },
  }),
  icon: css({
    fontSize: "3xl",
    marginBottom: "sm",
    display: "block",
  }),
  cardTitle: css({
    fontSize: "lg",
    fontWeight: "bold",
    marginBottom: "sm",
    color: "text",
    fontFamily: "heading",
  }),
  cardText: css({
    fontSize: "sm",
    color: "muted",
    lineHeight: "1.6",
    marginBottom: "sm",
  }),
  levels: css({
    fontSize: "xs",
    color: "brand",
    fontWeight: "medium",
    paddingY: "xs",
    paddingX: "sm",
    backgroundColor: "background",
    borderRadius: "sm",
    display: "inline-block",
  }),
};

// ===== TESTIMONIALS =====

export const testimonials = {
  grid: css({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "lg",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "md",
    },
  }),
  card: css({
    backgroundColor: "background",
    borderRadius: "md",
    padding: "lg",
    border: "1px solid token(colors.border)",
    position: "relative",
  }),
  quote: css({
    fontSize: "md",
    lineHeight: "1.7",
    color: "text",
    fontStyle: "italic",
    marginBottom: "md",
  }),
  quoteMark: css({
    fontSize: "3xl",
    color: "brand",
    lineHeight: 1,
    marginBottom: "sm",
    display: "block",
    fontFamily: "heading",
  }),
  author: css({
    fontSize: "sm",
    fontWeight: "bold",
    color: "text",
  }),
  origin: css({
    fontSize: "xs",
    color: "muted",
    marginTop: "xs",
  }),
};

// ===== CONTACT =====

export const contact = {
  container: css({
    textAlign: "center",
    maxWidth: "600px",
    mx: "auto",
  }),
  text: css({
    fontSize: "md",
    color: "muted",
    marginBottom: "lg",
    lineHeight: "1.7",
  }),
  buttons: css({
    display: "flex",
    gap: "lg",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "lg",
  }),
  whatsapp: css({
    display: "inline-flex",
    alignItems: "center",
    gap: "sm",
    paddingY: "md",
    paddingX: "xl",
    backgroundColor: "#25D366",
    color: "light",
    borderRadius: "md",
    fontWeight: "bold",
    fontSize: "md",
    textDecoration: "none",
    transition: "all 0.2s ease",
    _hover: {
      backgroundColor: "#1da851",
      transform: "translateY(-2px)",
      textDecoration: "none",
    },
  }),
  email: css({
    display: "inline-flex",
    alignItems: "center",
    gap: "sm",
    paddingY: "md",
    paddingX: "xl",
    backgroundColor: "brand",
    color: "light",
    borderRadius: "md",
    fontWeight: "bold",
    fontSize: "md",
    textDecoration: "none",
    transition: "all 0.2s ease",
    _hover: {
      backgroundColor: "accent",
      transform: "translateY(-2px)",
      textDecoration: "none",
    },
  }),
  location: css({
    fontSize: "sm",
    color: "muted",
    marginTop: "md",
  }),
};

// ===== FOOTER =====

export const footer = {
  container: css({
    width: "100%",
    padding: "md",
    borderTop: "1px solid token(colors.border)",
    backgroundColor: "light",
    textAlign: "center",
  }),
  text: css({
    fontSize: "xs",
    color: "muted",
    margin: 0,
  }),
  backToTop: css({
    display: "inline-block",
    fontSize: "xs",
    color: "brand",
    textDecoration: "none",
    marginTop: "xs",
    _hover: {
      textDecoration: "underline",
    },
  }),
};
