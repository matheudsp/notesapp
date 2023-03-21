import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { PropsWithChildren } from 'react';

export default function LayoutPost({ children }: PropsWithChildren) {

    const rowGap = 6
    const columnGap = 6
    return (
        <View style={[styles.container, { rowGap, columnGap }]}>
            {children}</View>

    )

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent:'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },


});

