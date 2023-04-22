import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const TaskItem = ({ task, handleDelete }) => {

const navigation = useNavigation();

  const [showDelete, setShowDelete] = useState(false);
  const [isSwiped, setIsSwiped] = useState(false);

  const handleSwipeLeft = () => {
    setShowDelete(true);
    setIsSwiped(true);
  };

  const handleDeletePress = () => {
    setShowDelete(false);
    setIsSwiped(false);
    handleDelete(task.id);
  };

  return (
    <Swipeable
      renderRightActions={() => (
        <TouchableOpacity onPress={handleDeletePress}>
          <View style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </View>
        </TouchableOpacity>
      )}
      onSwipeableLeftOpen={handleSwipeLeft}
      onSwipeableClose={() => setShowDelete(false)}
    >
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen',{id: task.id})}>
          <Text style={styles.itemTitle}>{task.title}</Text>
          <Text style={styles.itemTitle}>{task.description}</Text>
        </TouchableOpacity>

        {showDelete && (
          <TouchableOpacity onPress={handleDeletePress}>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        )}
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#333333',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  itemTitle: {
    color: '#ffffff',
  },
  deleteButton: {
    marginTop: 9,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 5,
    padding: 27,
  },
  deleteButtonText: {
    color: '#ffffff',
  },
  deleteText: {
    color: '#ffffff',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
});

export default TaskItem;
