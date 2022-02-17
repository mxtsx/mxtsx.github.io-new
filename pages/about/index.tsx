import React, {useEffect} from 'react';
import {aboutApi} from "../../api/about.api";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {useActions} from "../../hooks/useActions";
import {MainLayout} from "../../layouts/main.layout";

export const About = ({about}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const {getAboutText} = useActions()

    useEffect(() => {
        getAboutText(about)
    }, [])

    return (
        <MainLayout title={'About'}>
        </MainLayout>
    );
};

export default About

export const getStaticProps: GetStaticProps = async () => {
    const res = await aboutApi.getAbout()
    const about = res.status === 200 ? res.data : null
    return {
        props: {about}
    }
}
