import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/header.component";
import { FunnelIcon, ListBulletIcon } from "react-native-heroicons/outline";
import { useState } from "react";
import Product from "../components/product.component";
import { ArefRuqaa_400Regular, useFonts } from '@expo-google-fonts/aref-ruqaa'


export function HomePage({refresh, refreshFlag }){
    const [ isListView, setIsListView ] = useState(false);


    let [ fontsLoaded ] =  useFonts({ ArefRuqaa_400Regular});

    if(!fontsLoaded){
        return null
    }
    return (
      <View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 50, paddingHorizontal: 20, paddingBottom: 10, backgroundColor: 'white'}}>
            <View  style={{ width: 50 }}  >
                <Bars2Icon onPress={navigation.toggleDrawer} color={'black'} size={20} />
            </View>
            <Image
                source={require('../assets/Logo.png')}
                style={{
                    height: 32
                }}
            />
            <View style={{ width: 50, display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                <MagnifyingGlassIcon color={'black'} size={20}/>
                <ShoppingBagIcon color={'black'} size={20} />
            </View>
        </View>
        <View style={styles.container}>
                <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 20, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 600, fontFamily: 'ArefRuqaa_400Regular'}}>OUR STORY</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                        <ListBulletIcon onPress={()=>{ setIsListView(prev => !prev)}} color={'black'} size={20} />
                        <FunnelIcon color={'black'} size={20} />
                    </View>
                </View>
                <ScrollView style={{ display: 'flex' }}>
                    <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', flex: 2, columnGap: 10}}>
                        {
                            products.map((prod, idx) => <Product {...prod} isListView={isListView} refresh={refresh} refreshFlag={refreshFlag} key={idx} />)
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}