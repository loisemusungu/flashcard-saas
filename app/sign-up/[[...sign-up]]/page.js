import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Link,
  Box,
} from "@mui/material";
import { SignIn, SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <Container maxWidth="100vw">
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
            }}
          >
            Flashcard SaaS
          </Typography>
          <Button color="inherit">
            <Link href="/sign-up" passHref>
              Login
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/sign-in" passHref>
              Sign In
            </Link>
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4">Sign Up</Typography>
        <SignUp />
      </Box>
    </Container>
  );
}
