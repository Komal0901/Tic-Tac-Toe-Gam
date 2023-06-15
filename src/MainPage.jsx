import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
const windowwidth = Dimensions.get('window').width;
const MainPage = () => {
  const [active_player, setActive_player] = useState('X');
  const [xWin, setXWin] = useState(false);
  const [oWin, setOWin] = useState(false);
  const [winner, setWinner] = useState(false);
  const [markers, setMarkers] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [winnerIndex, setWinnerIndex] = useState([]);
  //   console.log(winnerIndex);
  const markPosition = position => {
    if (!markers[position]) {
      let temp = [...markers];
      temp[position] = active_player;
      setMarkers(temp);
      if (active_player === 'X') {
        setActive_player('O');
      } else {
        setActive_player('X');
      }
    }
  };

  const resetMarkers = () => {
    setMarkers([null, null, null, null, null, null, null, null, null]);
    setXWin(false);
    setOWin(false);
    setWinner(false);
  };

  const calculateWinner = marker => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [2, 5, 8],
      [1, 4, 7],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (marker[a] && marker[a] === marker[b] && marker[b] === marker[c]) {
        setWinnerIndex([a, b, c]);
        return marker[a];
      }
    }
    return null;
  };
  useEffect(() => {
    const winner = calculateWinner(markers);
    if (winner) {
      //   console.log('winner true');
      setWinner(true);
    }
    if (winner === 'X') {
      setXWin(true);
    } else if (winner === 'O') {
      setOWin(true);
    }
  }, [markers]);

  return (
    <View style={{flex: 1, backgroundColor: 'lightgray'}}>
      <View
        style={[
          styles.playerInfo,
          {backgroundColor: active_player === 'X' ? '#eb3480' : '#0802b3'},
        ]}>
        <Text style={styles.playerTxt}>Player {active_player}'s turn</Text>
      </View>
      <View style={styles.mainGrid}>
        {/* 1st cell */}
        <Pressable
          disabled={winner}
          style={[
            [
              styles.cell1,
              //   {backgroundColor: winnerIndex.includes(0) ? '#c2f7bc' : 'null'},
            ],
          ]}
          onPress={() => markPosition(0)}
          disabled={xWin}>
          {markers[0] === 'X' && (
            <Image source={require('./Assets/cross.png')} style={styles.img1} />
          )}
          {markers[0] === 'O' && (
            <Image
              source={require('./Assets/circle.png')}
              style={styles.img1}
            />
          )}
        </Pressable>
        {/* 2nd cell */}
        <Pressable
          style={[
            styles.cell1,
            // {backgroundColor: winnerIndex.includes(1) ? '#c2f7bc' : 'null'},
          ]}
          onPress={() => markPosition(1)}
          disabled={winner}>
          {markers[1] === 'X' && (
            <Image source={require('./Assets/cross.png')} style={styles.img1} />
          )}
          {markers[1] === 'O' && (
            <Image
              source={require('./Assets/circle.png')}
              style={styles.img1}
            />
          )}
        </Pressable>
        {/* 3rd cell */}
        <Pressable
          style={[
            styles.cell1,
            styles.right,
            // {backgroundColor: winnerIndex.includes(2) ? '#c2f7bc' : 'null'},
          ]}
          onPress={() => markPosition(2)}
          disabled={winner}>
          {markers[2] === 'X' && (
            <Image source={require('./Assets/cross.png')} style={styles.img1} />
          )}
          {markers[2] === 'O' && (
            <Image
              source={require('./Assets/circle.png')}
              style={styles.img1}
            />
          )}
        </Pressable>
        {/* 4th cell */}
        <Pressable
          style={[
            styles.cell1,
            // {backgroundColor: winnerIndex.includes(3) ? '#c2f7bc' : 'null'},
          ]}
          onPress={() => markPosition(3)}
          disabled={winner}>
          {markers[3] === 'X' && (
            <Image source={require('./Assets/cross.png')} style={styles.img1} />
          )}
          {markers[3] === 'O' && (
            <Image
              source={require('./Assets/circle.png')}
              style={styles.img1}
            />
          )}
        </Pressable>
        {/* 5th cell */}
        <Pressable
          style={[
            styles.cell1,
            // {backgroundColor: winnerIndex.includes(4) ? '#c2f7bc' : 'null'},
          ]}
          onPress={() => markPosition(4)}
          disabled={winner}>
          {markers[4] === 'X' && (
            <Image source={require('./Assets/cross.png')} style={styles.img1} />
          )}
          {markers[4] === 'O' && (
            <Image
              source={require('./Assets/circle.png')}
              style={styles.img1}
            />
          )}
        </Pressable>
        {/* 6th cell */}
        <Pressable
          style={[
            styles.cell1,
            styles.right,
            // {backgroundColor: winnerIndex.includes(5) ? '#c2f7bc' : 'null'},
          ]}
          onPress={() => markPosition(5)}
          disabled={winner}>
          {markers[5] === 'X' && (
            <Image source={require('./Assets/cross.png')} style={styles.img1} />
          )}
          {markers[5] === 'O' && (
            <Image
              source={require('./Assets/circle.png')}
              style={styles.img1}
            />
          )}
        </Pressable>
        {/* 7th cell */}
        <Pressable
          style={[
            styles.cell1,
            styles.bottom,
            // {backgroundColor: winnerIndex.includes(6) ? '#c2f7bc' : 'null'},
          ]}
          onPress={() => markPosition(6)}
          disabled={winner}>
          {markers[6] === 'X' && (
            <Image source={require('./Assets/cross.png')} style={styles.img1} />
          )}
          {markers[6] === 'O' && (
            <Image
              source={require('./Assets/circle.png')}
              style={styles.img1}
            />
          )}
        </Pressable>
        {/* 8th cell */}
        <Pressable
          style={[
            styles.cell1,
            styles.bottom,
            // {backgroundColor: winnerIndex.includes(7) ? '#c2f7bc' : 'null'},
          ]}
          onPress={() => markPosition(7)}
          disabled={winner}>
          {markers[7] === 'X' && (
            <Image source={require('./Assets/cross.png')} style={styles.img1} />
          )}
          {markers[7] === 'O' && (
            <Image
              source={require('./Assets/circle.png')}
              style={styles.img1}
            />
          )}
        </Pressable>
        {/* 9th cell */}
        <Pressable
          style={[
            styles.cell1,
            styles.bottom,
            styles.right,
            // {backgroundColor: winnerIndex.includes(8) ? '#c2f7bc' : 'null'},
          ]}
          onPress={() => markPosition(8)}
          disabled={winner}>
          {markers[8] === 'X' && (
            <Image source={require('./Assets/cross.png')} style={styles.img1} />
          )}
          {markers[8] === 'O' && (
            <Image
              source={require('./Assets/circle.png')}
              style={styles.img1}
            />
          )}
        </Pressable>
      </View>
      {/* replay */}
      <TouchableOpacity
        onPress={() => resetMarkers()}
        style={{
          alignSelf: 'flex-end',
          height: 70,
          width: 70,
          backgroundColor: 'black',
          margin: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('./Assets/replay.png')}
          style={{height: 62, width: 62}}
        />
      </TouchableOpacity>
      {oWin ? (
        <View style={[styles.playerInfo, {backgroundColor: '#0802b3'}]}>
          <Text style={styles.playerTxt}>Congratulations!!!!🥳O wins!!</Text>
        </View>
      ) : !oWin && !xWin ? (
        <Text style={styles.playerTxt}>No one wins !!! Play </Text>
      ) : null}
      {xWin ? (
        <View style={[styles.playerInfo, {backgroundColor: '#eb3480'}]}>
          <Text style={styles.playerTxt}>Congratulations!!!!🥳X wins!!</Text>
        </View>
      ) : !oWin && !xWin ? (
        <Text style={styles.playerTxt}>No one wins !!! Play </Text>
      ) : null}
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  playerInfo: {
    marginHorizontal: 20,
    paddingVertical: 20,
    marginTop: windowwidth / 30,
  },
  playerTxt: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    color: 'white',
  },
  mainGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: 10,
  },
  cell1: {
    width: windowwidth / 3.5,
    height: windowwidth / 3.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 6,
    borderBottomWidth: 6,
  },
  img1: {
    height: 62,
    width: 62,
  },
  bottom: {
    borderBottomColor: 'transparent',
  },
  right: {
    borderRightColor: 'transparent',
  },
});
