import {
  AddIcon,
  Badge,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  IconButton,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import { AlarmCard } from '../components/AlarmCard';

export const Home = () => {
  return (
    <Flex px={4} pb={4} justifyContent="space-between" h="full">
      <ScrollView>
        {/* <ScrollView
          _contentContainerStyle={{
            mb: 4,
            alignItems: 'center',
            flexDir: 'row',
          }}
        >
          <Badge variant="solid" colorScheme="primary">
            Todos
          </Badge>
          <Divider mx={2} orientation="vertical" h="2/3" />
          <Badge>Remédios da mãe</Badge>
        </ScrollView> */}
        {'Remédios da mãe,Remédios da vó'.split(',').map((nome, i) => (
          <Container mb={4} maxW="full" w="full">
            <Flex
              flexDir="row"
              px={1}
              mb={2}
              justifyContent="space-between"
              w="full"
            >
              <Text fontSize={18} bold>
                {nome}
              </Text>
              <Text color="muted.400">{i + 1}/3</Text>
            </Flex>
            <VStack space={2} w="full">
              {i === 1 && <AlarmCard />}
              <AlarmCard />
              <IconButton
                mt={1}
                variant="ghost"
                w="full"
                icon={<AddIcon size="sm" />}
              />
            </VStack>
          </Container>
        ))}
      </ScrollView>
      <Button>Adicionar aparelho</Button>
    </Flex>
  );
};
