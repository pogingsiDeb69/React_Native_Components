import React, { useState } from 'react'; // Import useState
import { SafeAreaView, View, Text, TouchableOpacity,Image ,Alert} from 'react-native';
import { Button, Card, Appbar } from 'react-native-paper';
import { styling } from './styles';

const AccordionItem = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleAccordion}>
        <Text style={{ fontSize: 16 }}>{title}</Text>
      </TouchableOpacity>
      {isExpanded && <Text style={{ marginLeft: 10 }}>{content}</Text>}
    </View>
  );
};

export const Component2 = ({navigation}) => {
  
  const items = [
    { title: 'First Name', content: 'Deborah' },
    { title: 'Second Name', content: 'Jane' },
    { title: 'Last Name', content: 'Antopina' },
  ];
  return (
    <SafeAreaView style={styling.main}>
      
      <Image source={require('../components/physics.png')} style={styling.logo}/>
      <Card style={styling.card}>
        <Card.Title titleStyle={styling.accordion} title="This is an Accordion" />

        <Card.Content>
          <Text style={{ color: 'red' }}>The Sections are clickable</Text>
          <View style={{ margin: 12 , width:300}}>
            {items.map((item, index) => (
              <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
          </View>
          <Button 
          mode="contained" 
          buttonColor='skyblue'
          onPress={() => navigation.navigate('Pressable')}>Next</Button>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};
