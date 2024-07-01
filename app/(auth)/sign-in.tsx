import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    setIsSubmitting(true);
    // Handle form submission
    setIsSubmitting(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#161622" }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          padding: 16,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={{ width: 115, height: 35 }}
          />
          <Text
            style={{
              fontSize: 24,
              color: "white",
              marginTop: 10,
              fontWeight: "600",
            }}
          >
            Log in to Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 16,
            }}
          >
            <Text style={{ fontSize: 16, color: "#7b7b8b" }}>
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              style={{ fontSize: 16, color: "#FFA001", marginLeft: 4 }}
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;