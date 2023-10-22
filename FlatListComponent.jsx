import { FlatList, Text } from 'react-native';

const data = [
  {key: 'Disney'},
  {key: 'Pixar'},
  {key: 'Dreamworks'},
  {key: 'Universal'},
  {key: 'Fox'},
  {key: 'Marvel'},
  {key: 'DC'},
 
];

const FlatListComponent = () => (
  <FlatList
    data={data}
    renderItem={({item}) => <Text>{item.key}</Text>}
  />
);
export default FlatListComponent;

