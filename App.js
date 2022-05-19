import React, { useState } from 'react'
import styled from 'styled-components'
import TinderCard from 'react-tinder-card'
import { StyleSheet, Text, View } from 'react-native'


const Buffer = styled.View`
    backgroundColor: #0d172e;
    height: 10%;
    flex: 1;
`

const Container = styled.View`
    backgroundColor: #0d172e;
    display: flex;
    align-items: center;
    justifyContent: center;
    height: 100%;
    width: 100%;
`

const CardContainer = styled.View`
    backgroundColor: #0d172e;
    height: 90%;
    width: 90%; 
`

const Card = styled.View`
    position: absolute;
    background-color: #3e6cd6;
    width: 90%;
    flex: 8;
    shadow-color: black;
    shadow-opacity: 0.2;
    shadow-radius: 20px;
    border-radius: 20px;
    justifyContent: center;
    alignItems: center;
`

const CardQuestion= styled.Text`
    position: absolute;
    fontSize: 20px;
    margin: 10px;
    color: #fff;
    textAlign: center;
    justifyContent: center;
    alignItems: center;
`

const InfoText = styled.Text`
    height: 28px;
    justify-content: center;
    display: flex;
    z-index: -100;
`

const db = [
  { id: "1", name: "Question 1"},
  { id: "2", name: "Question 2"},
  { id: "3", name: "Question 3"},
  { id: "4", name: "Question 4"},
  { id: "5", name: "Question 5"},
]

const page = StyleSheet.create({
  buffer: {
    height: "10%",
    backgroundColor: "#0d172e",
    position: "absolute",
  },
  card: {
    backgroundColor: "#3e6cd6",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  cardcontainer: {
    width: "90%",
    height: "90%",
    position: "absolute",
    fontSize: "20px",
    color: "#fff",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#0d172e",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  }


})

export default function Simple () {
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <View style={page.container}>
      <View style={page.buffer}/>
      <View style={page.cardcontainer}>
        {characters.map((character) =>
          <TinderCard key={character.id} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <View style={page.card}>
                <CardQuestion>{character.name}</CardQuestion>
            </View>
          </TinderCard>
        )}
      </View>
        
      {lastDirection ? <InfoText>You swiped {lastDirection}</InfoText> : <InfoText />}
    </View>
  )
}