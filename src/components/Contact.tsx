import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Link,
  SelectChangeEvent,
  CircularProgress,
} from '@mui/material';

const GOOGLE_SHEET_URL =
  'https://script.google.com/macros/s/AKfycbyvO2U9p4BX_VMzGjydqA2kUv9PKOmQqBl2AXhxpiQyAI0Nck5KCTUdfXkYzwDNlIc/exec';

const Contact: React.FC = () => {
  const [ref, inView] = useInView(0.15);
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const payload = {
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      name: form.name,
      email: form.email,
      service: form.service,
      message: form.message,
    };

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Apps Script
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      // no-cors means we can't read the response, but if no error thrown it succeeded
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const borderColor = (field: string) =>
    focused === field ? '#c0392b' : 'rgba(192,57,43,0.2)';

  const sharedInputSx = (field: string) => ({
    '& .MuiInput-root': {
      color: '#f5f0eb',
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 13,
      fontWeight: 300,
      letterSpacing: '0.05em',
      cursor: 'none',
      '&:before': { borderBottomColor: borderColor(field) },
      '&:after': { borderBottomColor: '#c0392b' },
      '&:hover:not(.Mui-disabled):before': { borderBottomColor: borderColor(field) },
    },
    '& .MuiInputBase-input': {
      padding: '14px 0',
      color: '#f5f0eb',
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 13,
      fontWeight: 300,
      letterSpacing: '0.05em',
      cursor: 'none',
      '&::placeholder': { color: 'rgba(156,156,151,0.6)', opacity: 1 },
    },
    '& .MuiInputLabel-root': {
      fontFamily: "'Poppins', sans-serif",
      fontSize: 9,
      letterSpacing: '0.3em',
      color: '#9c9c97',
      textTransform: 'uppercase',
      transform: 'none',
      position: 'static',
      display: 'block',
      marginBottom: '8px',
    },
    '& .MuiInputLabel-root.Mui-focused': { color: '#9c9c97' },
  });

  const selectSx = (field: string) => ({
    '& .MuiInput-root': {
      color: form.service ? '#f5f0eb' : '#9c9c97',
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 13,
      fontWeight: 300,
      letterSpacing: '0.05em',
      cursor: 'pointer',
      '&:before': { borderBottomColor: borderColor(field) },
      '&:after': { borderBottomColor: '#c0392b' },
      '&:hover:not(.Mui-disabled):before': { borderBottomColor: borderColor(field) },
    },
    '& .MuiSelect-select': {
      padding: '14px 30px 14px 0',
      background: 'transparent',
      color: form.service ? '#f5f0eb' : '#9c9c97',
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 13,
      fontWeight: 300,
      letterSpacing: '0.05em',
      cursor: 'pointer',
    },
    '& .MuiSvgIcon-root': { color: '#9c9c97' },
    '& .MuiInputLabel-root': {
      fontFamily: "'Poppins', sans-serif",
      fontSize: 9,
      letterSpacing: '0.3em',
      color: '#9c9c97',
      textTransform: 'uppercase',
      transform: 'none',
      position: 'static',
      display: 'block',
      marginBottom: '8px',
    },
    '& .MuiInputLabel-root.Mui-focused': { color: '#9c9c97' },
  });

  return (
    <Box
      id="contact"
      ref={ref as any}
      component="section"
      sx={{
        padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 120px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background radial gradient */}
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '50%',
          height: '70%',
          background:
            'radial-gradient(ellipse at bottom right, rgba(192,57,43,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Grid
        container
        sx={{
          maxWidth: 1200,
          margin: '0 auto',
          gap: 'clamp(40px, 8vw, 120px)',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
        }}
      >
        {/* Left */}
        <Grid
          size={{ xs: 12, md: 6 }}
          component={motion.div as any}
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 10,
              letterSpacing: '0.4em',
              color: '#c0392b',
              textTransform: 'uppercase',
              mb: '20px',
            }}
          >
            ✦ Get In Touch
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: 300,
              lineHeight: 1.05,
              color: '#f5f0eb',
              mb: '24px',
            }}
          >
            Let's Build
            <br />
            <Box component="em" sx={{ fontStyle: 'italic', color: '#c0392b' }}>
              Your Brand Together
            </Box>
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 13,
              lineHeight: 1.9,
              color: '#9c9c97',
              fontWeight: 300,
              mb: '48px',
            }}
          >
            Ready to elevate your brand? Whether you need a new logo, a complete brand identity,
            or packaging that stands out — I'm here to bring your vision to life.
          </Typography>

          {/* Contact details */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { label: 'Email', value: 'hello@illiora.studio', href: 'mailto:hello@illiora.studio' },
              { label: 'Instagram', value: '@illiora.studio', href: 'https://www.instagram.com/illiora.studio/' },
            ].map((item) => (
              <Box
                key={item.label}
                sx={{
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'baseline',
                  borderBottom: '1px solid rgba(192,57,43,0.08)',
                  pb: '16px',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 9,
                    letterSpacing: '0.3em',
                    color: '#9c9c97',
                    textTransform: 'uppercase',
                    minWidth: 100,
                  }}
                >
                  {item.label}
                </Typography>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 20,
                    color: '#9c9c97',
                    transition: 'color 0.3s',
                    '&:hover': { color: '#c0392b' },
                  }}
                >
                  {item.value}
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Right: Form */}
        <Grid
          size={{ xs: 12, md: 6 }}
          component={motion.div as any}
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          {submitted ? (
            <Box
              component={motion.div as any}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                gap: '20px',
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  border: '1px solid #c0392b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                  color: '#c0392b',
                }}
              >
                ✓
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 36,
                  fontWeight: 300,
                  color: '#f5f0eb',
                }}
              >
                Message Sent
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 12,
                  color: '#9c9c97',
                  lineHeight: 1.8,
                }}
              >
                Thank you for reaching out. I'll get back to you within 24 hours.
              </Typography>
              <Button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: '', email: '', service: '', message: '' });
                }}
                sx={{
                  background: 'none',
                  border: '1px solid rgba(192,57,43,0.3)',
                  color: '#c0392b',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 10,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  padding: '12px 28px',
                  cursor: 'none',
                  mt: '8px',
                  borderRadius: 0,
                  '&:hover': { background: 'none', borderColor: '#c0392b' },
                }}
              >
                Send Another
              </Button>
            </Box>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: 'flex', flexDirection: 'column', gap: '36px' }}
            >
              {/* Name + Email row */}
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 8 }}>
                  <TextField
                    required
                    fullWidth
                    label="Name"
                    variant="standard"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    placeholder="Your name"
                    slotProps={{ inputLabel: { shrink: true } }}
                    sx={sharedInputSx('name')}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    type="email"
                    variant="standard"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    placeholder="your@email.com"
                    slotProps={{ inputLabel: { shrink: true } }}
                    sx={sharedInputSx('email')}
                  />
                </Grid>
              </Grid>

              {/* Service select */}
              <FormControl fullWidth variant="standard" sx={selectSx('service')}>
                <InputLabel shrink>Service Required</InputLabel>
                <Select
                  required
                  value={form.service}
                  onChange={(e: SelectChangeEvent) =>
                    setForm({ ...form, service: e.target.value })
                  }
                  onFocus={() => setFocused('service')}
                  onBlur={() => setFocused(null)}
                  displayEmpty
                  MenuProps={{
                    slotProps: {
                      paper: {
                        sx: {
                          background: '#111',
                          color: '#f5f0eb',
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 13,
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value="" disabled sx={{ color: '#9c9c97', background: '#111' }}>
                    Select a service...
                  </MenuItem>
                  {[
                    'Logo Design',
                    'Package Design',
                    'Flyer Design',
                    'Brochure Design',
                    'Menu Card Design',
                    'Banner Design',
                    'Visiting Card Design',
                    'Full Brand Identity',
                  ].map((s) => (
                    <MenuItem
                      key={s}
                      value={s}
                      sx={{
                        background: '#111',
                        color: '#f5f0eb',
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 13,
                        '&:hover': { background: 'rgba(192,57,43,0.1)' },
                        '&.Mui-selected': { background: 'rgba(192,57,43,0.15)' },
                        '&.Mui-selected:hover': { background: 'rgba(192,57,43,0.2)' },
                      }}
                    >
                      {s}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Message */}
              <TextField
                required
                fullWidth
                multiline
                rows={4}
                label="Message"
                variant="standard"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                placeholder="Tell me about your project..."
                slotProps={{ inputLabel: { shrink: true } }}
                sx={{
                  ...sharedInputSx('message'),
                  '& .MuiInputBase-inputMultiline': { resize: 'none' },
                }}
              />

              {/* Error message */}
              {error && (
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 11,
                    color: '#e74c3c',
                    letterSpacing: '0.05em',
                  }}
                >
                  {error}
                </Typography>
              )}

              {/* Submit */}
              <Button
                type="submit"
                disabled={loading}
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 11,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: '#f5f0eb',
                  background: '#c0392b',
                  border: 'none',
                  padding: '18px 40px',
                  cursor: loading ? 'wait' : 'none',
                  transition: 'all 0.3s',
                  alignSelf: 'flex-start',
                  borderRadius: 0,
                  '&:hover': { background: '#e74c3c' },
                  '&.Mui-disabled': { background: 'rgba(192,57,43,0.4)', color: 'rgba(245,240,235,0.5)' },
                }}
              >
                {loading ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CircularProgress size={14} sx={{ color: '#f5f0eb' }} />
                    Sending...
                  </Box>
                ) : (
                  'Send Message →'
                )}
              </Button>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;