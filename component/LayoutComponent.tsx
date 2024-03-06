import {Button, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from 'react';

const LayoutComponent = () => {
  const Square = (key: any) => {
    const color = randomHexColor();
    return <View key={key}
                 style={{
                   width: 50,
                   height: 50,
                   backgroundColor: color
                 }}
    />;
  };

  const [flexDirection, setFlexDirection] = useState(0);
  const [squares, setSquares] = useState([<Square key={1}/>, <Square key={2}/>, <Square key={3}/>]);
  const [justifyContent, setJustifyContent] = useState(0);
  const [alignItems, setAlignItems] = useState(0);
  const [direction, setDirection] = useState(0);
  const [wrap, setWrap] = useState(0);

  const flexDirections = [
    'row',
    'row-reverse',
    'column',
    'column-reverse'
  ] as const;
  const justifyContents = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly'
  ] as const;
  const alignItemsArr = [
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline'
  ] as const;

  const wraps = ['nowrap', 'wrap', 'wrap-reverse'] as const;
  const directions = ['inherit', 'ltr', 'rtl'] as const;

  const hookedStyles = {
    flexDirection: flexDirections[flexDirection],
    justifyContent: justifyContents[justifyContent],
    alignItems: alignItemsArr[alignItems],
    direction: directions[direction],
    flexWrap: wraps[wrap]
  };

  const changeSetting = (
    value: number,
    options: readonly unknown[],
    setterFunction: (index: number) => void
  ) => {
    if (value === options.length - 1) {
      setterFunction(0);
      return;
    }
    setterFunction(value + 1);
  };


  const randomHexColor = () => {
    return '#000000'.replace(/0/g, () => {
      return Math.round(Math.random() * 16).toString(16);
    });
  };

  useEffect(() => {
    console.log('hookedStyles => ', hookedStyles);
  }, [hookedStyles]);

  return (
    <>
      <View style={{paddingTop: StatusBar.currentHeight}}>
        <View style={[styles.container, styles.playingSpace, hookedStyles]}>
          {squares.map(elem => elem)}
        </View>
        <ScrollView style={styles.container}>
          <View style={styles.controlSpace}>
            <View style={styles.buttonView}>
              <Button
                title="Change FlexComponent Direction"
                onPress={() => {
                  changeSetting(flexDirection, flexDirections, setFlexDirection);
                }}
              />
              <Text style={styles.text}>{flexDirections[flexDirection]}</Text>
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Change Justify Content"
                onPress={() =>
                  changeSetting(
                    justifyContent,
                    justifyContents,
                    setJustifyContent
                  )
                }
              />
              <Text style={styles.text}>{justifyContents[justifyContent]}</Text>
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Change Align Items"
                onPress={() =>
                  changeSetting(alignItems, alignItemsArr, setAlignItems)
                }
              />
              <Text style={styles.text}>{alignItemsArr[alignItems]}</Text>
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Change Direction"
                onPress={() => changeSetting(direction, directions, setDirection)}
              />
              <Text style={styles.text}>{directions[direction]}</Text>
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Change FlexComponent Wrap"
                onPress={() => changeSetting(wrap, wraps, setWrap)}
              />
              <Text style={styles.text}>{wraps[wrap]}</Text>
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Add Square"
                onPress={() => setSquares([...squares, <Square key={squares.length + 1}/>])}
              />
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Delete Square"
                onPress={() =>
                  setSquares(squares.filter((v, i) => i !== squares.length - 1))
                }
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '50%'
  },
  playingSpace: {
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 3
  },
  controlSpace: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5F5F5'
  },
  buttonView: {
    width: '50%',
    padding: 10
  },
  text: {textAlign: 'center'}
});

export default LayoutComponent;
