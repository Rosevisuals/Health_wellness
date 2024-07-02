import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaComments } from 'react-icons/fa';

const ChatIconWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #1a237e;
  color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 1000;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0f59c7;
  }
`;

const ChatWrapper = styled.div`
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 1000;
`;

const ChatHeader = styled.div`
  background-color: #1a73e8;
  color: #fff;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-align: center;
`;

const ChatBody = styled.div`
  padding: 10px;
  max-height: 300px;
  overflow-y: auto;
`;

const ChatInputWrapper = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
  outline: none;
`;

const SendButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #1a73e8;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`;

const Message = styled.div`
  background-color: ${props => (props.isUser ? '#dcf8c6' : '#eee')};
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  align-self: ${props => (props.isUser ? 'flex-end' : 'flex-start')};
`;

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setMessages([]);
    }, 2 * 60 * 60 * 1000); // 2 hours
  };

  useEffect(() => {
    resetTimeout();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const generalResponses = {
    "headache": "I'm sorry to hear that you have a headache. It's important to rest, stay hydrated, and avoid any triggers. If the headache persists, please consult a healthcare professional.",
    "body weakness": "Feeling body weakness can be due to various reasons. Make sure to rest, eat a balanced diet, and stay hydrated. If it continues, please see a healthcare professional.",
    "sleepy": "Feeling sleepy often could be a sign of lack of sleep or other underlying conditions. Ensure you are getting enough rest and if it persists, consult a healthcare professional.",
    "moody": "Experiencing mood swings can be challenging. Make sure to take care of your mental health and consider speaking to a mental health professional if needed.",
    "body pain": "Body pain can have many causes. Rest, proper nutrition, and staying hydrated can help. If the pain is severe or persists, please see a healthcare professional."
  };

  const diseaseResponses = {
    diabetes: {
      advice: "It looks like you might have symptoms related to diabetes. It's important to maintain a balanced diet, monitor your blood sugar levels, and consult a healthcare professional.",
      medicines: "Common medicines for diabetes include Metformin, Insulin, and Sulfonylureas. Please consult your doctor before taking any medication.",
      exercises: "Regular physical activity such as walking, cycling, and strength training can help manage diabetes."
    },
    hypertension: {
      advice: "You mentioned symptoms that could be related to hypertension. Ensure you reduce sodium intake, exercise regularly, and check your blood pressure often.",
      medicines: "Common medicines for hypertension include ACE inhibitors, Beta-blockers, and Diuretics. Please consult your doctor before taking any medication.",
      exercises: "Aerobic exercises like walking, jogging, and swimming are beneficial for managing hypertension."
    },
    asthma: {
      advice: "Asthma symptoms can be managed by avoiding triggers, using prescribed inhalers, and monitoring your breathing. Consult a healthcare provider for a tailored management plan.",
      medicines: "Common medicines for asthma include Albuterol, Fluticasone, and Montelukast. Please consult your doctor before taking any medication.",
      exercises: "Breathing exercises, swimming, and yoga can help improve lung function for asthma patients."
    },
    arthritis: {
      advice: "For arthritis, maintaining an active lifestyle with low-impact exercises, managing weight, and taking prescribed medications can help manage symptoms. Consult your doctor for specific advice.",
      medicines: "Common medicines for arthritis include NSAIDs, Methotrexate, and Corticosteroids. Please consult your doctor before taking any medication.",
      exercises: "Low-impact exercises like swimming, cycling, and tai chi are beneficial for arthritis patients."
    },
    depression: {
      advice: "Depression is a serious condition. It's important to seek help from a mental health professional. Regular exercise, a healthy diet, and maintaining social connections can also support your mental health.",
      medicines: "Common medicines for depression include SSRIs, SNRIs, and Tricyclic antidepressants. Please consult your doctor before taking any medication.",
      exercises: "Regular physical activity, such as walking, jogging, and yoga, can help alleviate symptoms of depression."
    },
    migraine: {
      advice: "Migraines can often be managed by identifying and avoiding triggers, maintaining a regular sleep schedule, and using prescribed medications. Consult a healthcare provider for a tailored plan.",
      medicines: "Common medicines for migraines include Triptans, Beta-blockers, and Anti-inflammatory drugs. Please consult your doctor before taking any medication.",
      exercises: "Low-impact exercises like walking, swimming, and yoga can help reduce the frequency of migraines."
    },
    allergies: {
      advice: "Managing allergies involves avoiding known allergens, taking antihistamines, and possibly getting allergy shots. Consult an allergist for specific recommendations.",
      medicines: "Common medicines for allergies include Antihistamines, Decongestants, and Corticosteroids. Please consult your doctor before taking any medication.",
      exercises: "Regular exercise can help boost your immune system and reduce allergy symptoms."
    },
    covid: {
      advice: "If you suspect COVID-19, it's important to get tested, isolate yourself, and follow public health guidelines. Stay hydrated, rest, and consult a healthcare provider if symptoms worsen.",
      medicines: "Consult a healthcare provider for the appropriate medication and treatment for COVID-19.",
      exercises: "Light exercises like stretching and walking can help maintain physical health during recovery from COVID-19."
    },
    anemia: {
      advice: "Anemia can be managed with a diet rich in iron, vitamin B12, and folate. Foods like spinach, red meat, and fortified cereals can help. Consult your doctor for appropriate supplements.",
      medicines: "Common medicines for anemia include Iron supplements, Vitamin B12 injections, and Folic acid supplements. Please consult your doctor before taking any medication.",
      exercises: "Gentle exercises like walking, yoga, and stretching can help improve circulation and energy levels."
    }
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      const userMessage = { text: inputValue, isUser: true };
      setMessages([...messages, userMessage]);
      setInputValue('');
      resetTimeout(); // Reset timeout on user activity

      let response = 'I am sorry, I cannot respond to that right now. Please rephrase your question.';

      if (inputValue.toLowerCase() === 'hi') {
        response = 'Welcome to HealthCare! How can I help you?';
      } else if (inputValue.toLowerCase().includes('not feeling well') || 
                 inputValue.toLowerCase().includes('feeling sad') || 
                 inputValue.toLowerCase().includes('feeling depressed') || 
                 inputValue.toLowerCase().includes('not okay') || 
                 inputValue.toLowerCase().includes('am not well') || 
                 inputValue.toLowerCase().includes('not well')) {
        response = "I'm sorry to hear that you're not feeling well. If you need immediate help, i can help.";
      } else {
        let found = false;
        for (const key in generalResponses) {
          if (inputValue.toLowerCase().includes(key)) {
            response = generalResponses[key];
            found = true;
            break;
          }
        }

        if (!found) {
          for (const disease in diseaseResponses) {
            if (inputValue.toLowerCase().includes(disease)) {
              const { advice, medicines, exercises } = diseaseResponses[disease];
              response = `${advice}\n\nMedicines: ${medicines}\n\nExercises: ${exercises}`;
              break;
            }
          }
        }
      }

      const botMessage = { text: response, isUser: false };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      <ChatIconWrapper onClick={toggleChat}>
        <FaComments size={24} />
      </ChatIconWrapper>
      {isOpen && (
        <ChatWrapper>
          <ChatHeader>Chat with us</ChatHeader>
          <ChatBody>
            {messages.map((msg, index) => (
              <Message key={index} isUser={msg.isUser}>{msg.text}</Message>
            ))}
          </ChatBody>
          <ChatInputWrapper>
            <ChatInput
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
            />
            <SendButton onClick={handleSend}>Send</SendButton>
          </ChatInputWrapper>
        </ChatWrapper>
      )}
    </>
  );
};

export default Chatbot;
