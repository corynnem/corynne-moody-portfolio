"use client";

import * as React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  TextField,
  Button,
  FormControl,
  InputAdornment,
  Snackbar,
  Alert,
  Chip,
  Divider,
} from "@mui/material";
import {
  Email,
  Person,
  Message,
  Favorite,
  SendRounded,
} from "@mui/icons-material";
import {
  ContactFormProps,
  FormErrors,
  FormValues,
  FormTypes,
  validateForm,
  MAX_CHARS,
} from "./helpers";
import useStyles from "./styles"

export const Contact = ({ onSubmit }: ContactFormProps) => {
  const { classes } = useStyles();
  const [formValues, setFormValues] = React.useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [sent, setSent] = React.useState<boolean>(false);
  const [sending, setSending] = React.useState<boolean>(false);

  const { name, email, message } = formValues ?? {};

  const handleChange =
    (field: keyof FormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormValues((v) => ({ ...v, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidated = validateForm({ formValues, setErrors });
    if (!isValidated) return;
    setSending(true);

    try {
      if (typeof onSubmit === "function") {
        await onSubmit(formValues);
      } else {
        await new Promise((r) => setTimeout(r, 900));
      }
      setSent(true);
      setFormValues({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setErrors((prev) => ({
        ...prev,
        submit: "Oops, something went wrong. Try again?",
      }));
    } finally {
      setSending(false);
    }
  };

  const remainingCharacters = MAX_CHARS - message.length;

  return (
    <Box id="contact" className={classes.body}>
      <Container maxWidth="sm">
        <Card className={classes.card}>
          <Box className={classes.formSection} />
          <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
            <Stack spacing={2.5} component="form" onSubmit={handleSubmit}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                <Typography variant="h5" fontWeight={800} >
                  Let’s be pen pals
                </Typography>
                <Chip
                  icon={<Favorite />}
                  label="Nice to meet you!"
                  size="small"
                  color="secondary"
                  variant="outlined"
                />
              </Stack>

              <Divider />
              
              <FormControl>
                <TextField
                  label="Your name"
                  placeholder="e.g., Corynne"
                  value={name}
                  onChange={handleChange(FormTypes.Name)}
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                  required
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </FormControl>

              <FormControl>
                <TextField
                className={classes.formComponents}
                  label="Email"
                  placeholder="moody.corynne@gmail.com"
                  type="email"
                  value={email}
                  onChange={handleChange(FormTypes.Email)}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  required
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </FormControl>

              <FormControl>
                <TextField
                  label="Message"
                  placeholder="Chat with me :)"
                  multiline
                  minRows={4}
                  value={message}
                  onChange={handleChange(FormTypes.Message)}
                  error={Boolean(errors.message)}
                  helperText={errors.message || `${remainingCharacters} characters left`}
                  slotProps={{
                    input: {
                      inputProps: {
                        maxLength: MAX_CHARS,
                      },
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{ alignSelf: "flex-start", pt: 1 }}
                        >
                          <Message />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </FormControl>

              {errors.submit && (
                <Alert severity="error" variant="outlined">
                  {errors.submit}
                </Alert>
              )}

              <Box className={classes.buttonContainer}>
                <Button
                  className={classes.formSubmitButton}
                  variant="contained"
                  type="submit"
                  endIcon={<SendRounded />}
                  disabled={sending}
                >
                  {sending ? "Sending…" : "Send message"}
                </Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Container>

      <Snackbar
        open={sent}
        autoHideDuration={3000}
        onClose={(_, reason) => {
          if (reason === "clickaway") return;
          setSent(false);
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSent(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Message sent! I’ll get back to you soon :)
        </Alert>
      </Snackbar>
    </Box>
  );
};
