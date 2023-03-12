import React, { FC } from 'react'
import { FlatListProps, FlatList, View } from 'react-native'

import Header from './Header'
import Category from './Category'
import { ScaledSheet } from 'react-native-size-matters'
import { COLORS } from '@src/res'

const categories = ['Sports', 'Cinema', 'Animals', 'Geography', 'Science']

const Home: FC = () => {
  const renderCategory: FlatListProps<string>['renderItem'] = ({
    item,
    index,
  }) => {
    return <Category category={item} isEven={index % 2 == 0} />
  }

  return (
    <View style={styles.container}>
      <Header />
      <FlatList<string>
        renderItem={renderCategory}
        keyExtractor={(_, i) => 'c-' + i}
        data={categories}
        numColumns={2}
        contentContainerStyle={{
          paddingVertical: 32,
        }}
      />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
})

export default Home
