import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiGitMergeLine,
  RiDashboardLine,
  RiInputMethodLine,
} from "react-icons/ri";

import NavLink from "./NavLink";
import NavSection from "./NavSection";

export default function SidebarNav() {
  return (
    <Stack spacing={12} align="flex-center">
      <NavSection title="Geral">
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
        <NavLink href="/users" icon={RiContactsLine}>
          Usuários
        </NavLink>
      </NavSection>

      <NavSection title="Automação">
        <NavLink href="/forms" icon={RiInputMethodLine}>
          Formlários
        </NavLink>
        <NavLink href="/automation" icon={RiGitMergeLine}>
          Automação
        </NavLink>
      </NavSection>
    </Stack>
  );
}
