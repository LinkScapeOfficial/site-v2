import { useRef, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Button, Input, Text, Heading } from 'theme-ui';

export default function Subscribe() {
  return (
      <section>
        <Container>
          <Box sx={styles.contentBox}>
            <Box sx={styles.contentBoxInner}>
              <Heading as="h2" sx={styles.title}>
                Newsletter
              </Heading>
              <form action="https://postal.hackclub.com/subscribe" method="POST" accept-charset="utf-8">
                <Flex sx={styles.subscribeForm}>
                  <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                  />
                  <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                  />
                  <Input type="hidden" name="hp" id="hp" />
                  <Input type="hidden" name="list" value="1AaBEdR4lS7PwHFOfEzGtQ" />
                  <Input type="hidden" name="subform" value="yes" />
                  <br />
                  <br />
                  <Button
                      type="submit"
                      className="subscribe__btn"
                      aria-label="Subscribe"
                  >
                    Subscribe
                  </Button>
                </Flex>
              </form>
            </Box>
          </Box>
        </Container>
      </section>
  );
}

const styles = {
  contentBox: {
    backgroundColor: 'primary',
    textAlign: 'center',
    borderRadius: 10,
    py: ['60px', null, 8],
  },
  contentBoxInner: {
    width: ['100%', null, '540px', '600px'],
    mx: 'auto',
    mt: -1,
    px: [3, 5],
  },
  title: {
    fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
    color: 'white',
    lineHeight: [1.3, null, null, 1.25],
    fontWeight: '700',
    letterSpacing: ['-.5px', null, '-1.5px'],
    mb: [2, 3],
  },
  subscribeForm: {
    mt: [6, null, null, 7],
    backgroundColor: ['transparent', 'white'],
    borderRadius: [0, 15],
    overflow: 'hidden',
    p: [0, 1],
    flexDirection: 'column',
    'input': {
      borderRadius: [0, 15]
    },
    '.subscribe__btn': {
      borderRadius: [0, 15],
      flexShrink: 0,
      ml: [0, 2],
      backgroundColor: ['text', 'primary'],
      mt: [2, 0],
      py: ['15px'],
    },
  },
};