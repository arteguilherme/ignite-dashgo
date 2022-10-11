import { Link, Text } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Link
      as="a"
      href="/dashboard"
      style={{ textDecoration: "none" }}
      fontSize={["2xl", " 3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      dashgo
      <Text as="span" ml="1" color="pink.500">
        .
      </Text>
    </Link>
  );
}
