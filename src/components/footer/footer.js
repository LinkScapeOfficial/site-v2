
import { jsx, Box, Grid, Container, Image, Heading, Text } from 'theme-ui';
export default function Footer() {
  return (
      <Box as="footer" style={styles.Box}>
        <Container style={styles.Container}>
          <br />
          <br />
          <a href="https://vercel.com/?utm_source=linkscape&utm_campaign=oss">
            <img className='mx-auto' alt="Vercel" src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" />
          </a>
          <br />
          <text>
            © 2023 LinkScape, a 501(c)(3) nonprofit fiscally sponsored by <a href="https://the.hackfoundation.org"><text class="underline" color="blue">The Hack Foundation</text></a>. <br />EIN: 81-2908499
          </text>
        </Container>
      </Box>
  );
};
const styles= {
    Box: {
      bg: "#F9FAFC",
      color: "#1F2D3D",
    },
    Container: {
        pt: 5,
        pb: [3, 4],
        textAlign: "center"
    }
};
