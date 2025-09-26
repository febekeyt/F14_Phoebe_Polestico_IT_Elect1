import React, { useEffect, useRef, useState } from 'react';
import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const contacts = [
    {
        id: '1',
        name: 'Leave a note',
        messages: [],
    },
    {
        id: '2',
        name: 'Claire Ann',
        messages: [
  { text: 'pob!', sender: '5:18 pm' },
  { text: 'asaa ka!', sender: '5:21 pm' },
  { text: 'nahuman nakas ass.?', sender: '5:22 pm' },
  { text: 'send pobbb mwhehe', sender: '5:23 pm' },
        ],
    },
    {
         id: '3',
        name: 'Athena Salumag',
        messages: [
  { text: 'Pob, dia kos secret place', sender: '4:00 pm' },
  { text: 'nag study', sender: '4:11 pm' },
  { text: 'hahhaha', sender: '4:11 pm' },
  { text: 'chat og naa namos room', sender: '4:48 pm' },
  { text: 'ky murag madugay mi', sender: '4:50 pm' },
        ],
    },
    {
        id: '4',
        name: 'Benjelie Cabilez',
        messages: [
  { text: 'pobbb', sender: '5:00 pm' },
  { text: 'nagsale nag otwoo', sender: '5:00 pm' },
  { text: '500 na pobbbbb', sender: '5:05 pm' },
  { text: 'orderrr nataaaa', sender: '5:05 pm' },
  { text: 'pobbbb ga orderr nko!!', sender: '5:06 pm' },
  { text: 'nextweek abot!', sender: '5:18 pm' },
        ],
    },
];

const Messenger = () => {
    const [messages, setMessages] = useState({});
    const [newMessage, setNewMessage] = useState('');
    const [activeContact, setActiveContact] = useState(null);
    const scrollViewRef = useRef();

   
    useEffect(() => {
    if (activeContact) {
  
  setMessages(prevMessages => ({
                ...prevMessages,
  [activeContact.id]: activeContact.messages ? [...activeContact.messages] : [],
            }));
        }
    }, [activeContact]);

    const sendMessage = () => {
    if (newMessage.trim() !== '' && activeContact) {
    setMessages(prevMessages => {
    const newMessages = [...(prevMessages[activeContact.id] || []), { text: newMessage, sender: 'You' }];
    return {
    ...prevMessages,
    [activeContact.id]: newMessages
                };
            });
    setNewMessage('');

   scrollViewRef.current.scrollToEnd({ animated: true });
        }
    };

    const handleContactPress = (contact) => {
        setActiveContact(contact);
    };

    const getNewMessageCount = (contact) => {
        if (contact.messages) {
            return contact.messages.length;
        }
        return 0;
    };

    return (
    <View style={styles.boxContainer}>
    <Text style={styles.sectionTitle}>Messenger</Text>
    <ScrollView horizontal style={styles.contactListContainer}>
    {contacts.map((contact) => (
    <TouchableOpacity
    key={contact.id}
    style={styles.contactContainer}
  onPress={() => handleContactPress(contact)}
                    >
  <View style={[
  styles.profileCircle,
  activeContact && activeContact.id === contact.id ? styles.activeProfileCircle : null
     ]}>
   </View>
   <Text style={styles.contactName}>{contact.name}</Text>
  </TouchableOpacity>
                ))}
  </ScrollView>
{activeContact && (
  <View>
  <View style={styles.selectedContactInfo}>
<View style={styles.selectedContactCircle} />
  <View>
 <Text style={styles.selectedContactName}>{activeContact.name}</Text>
  <Text style={styles.selectedContactMessageCount}>
  {getNewMessageCount(activeContact)} New Messages
  </Text>
  </View>
  </View>
  <ScrollView
  ref={scrollViewRef}
  style={styles.messageListContainer}
  onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                    >
  {(messages[activeContact.id] || []).map((message, index) => (
  <View key={index} style={[
  styles.messageContainer,
  message.sender === 'You' ? styles.sentMessage : styles.receivedMessage
       ]}>
  <Text style={styles.messageText}>{message.text}</Text>
  <Text style={styles.messageSender}>{message.sender}</Text>
  </View>
      ))}
 </ScrollView>
 <TextInput
 style={styles.input}
 placeholder={`Type your message to ${activeContact.name}...`}
 value={newMessage}
 onChangeText={text => setNewMessage(text)}
          />
<Button title="Send" style={styles.button} onPress={sendMessage} />
</View>
        )}
</View>
    );
};

export default Messenger;