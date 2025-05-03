import { Tabs } from "expo-router";
import { FontAwesome5, MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";
import React from "react";
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Platform } from 'react-native';

export default function TabsLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs 
            screenOptions={{ 
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarBackground: TabBarBackground,
                tabBarButton: HapticTab,
                tabBarStyle: Platform.select({
                    ios: {
                    // Use a transparent background on iOS to show the blur effect
                    position: 'absolute',
                    },
                    default: {},
                }),
            }}>
        <Tabs.Screen
            name="notification"
            options={{
            title: "Notifications",
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="notifications-outline" size={size} color={color} />
            ),
            }}
        />
        <Tabs.Screen
            name="feed"
            options={{
            title: "Feed",
            tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="dynamic-feed" size={size} color={color} />
            ),
            }}
        />
        <Tabs.Screen
            name="index"
            options={{
            title: "Accueil",
            tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="home" size={size} color={color} />
            ),
            }}
        />
        <Tabs.Screen
            name="chat"
            options={{
            title: "Discussions",
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />
            ),
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
            title: "Profil",
            tabBarIcon: ({ color, size }) => (
                <Feather name="user" size={size} color={color} />
            ),
            }}
        />
        </Tabs>
    );
}