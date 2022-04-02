import React, { useState } from 'react';
import { FlatList, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData{
  id: string;
  name: string;
}

export function Home(){
  const [newSkill, setNewSkill] = useState<string>('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);

  function handleAddNewSkill(){
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills(oldState => [...oldState, data])
  }

  function handleRemoveSkill(id: string){
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Rafael</Text>
      <TextInput 
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      
      <Button 
        title="Add"
        onPress={handleAddNewSkill}
      />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>
      
      <FlatList 
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard 
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  }
})