import { AppShell, Stack, Text } from "@mantine/core";
import { ContainerHeader } from "./ContainerHeader";
import { ContainerNavBar } from "./ContainerNavBar";

const Container = () => {
  return <AppShell
      padding="md"
      navbar={<ContainerNavBar />}
      header={<ContainerHeader />}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
        <Stack>
            <Text>View</Text>
        </Stack>
    </AppShell>;
};

export default Container;
