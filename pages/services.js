import Head from 'next/head';
import Link from 'next/link';
import Layout from '../src/components/layout';

export default function Services() {
    return (
        <Layout>
            <Head>
                <title>Our Services</title>
            </Head>
            <h1>Services</h1>
            <h2>
                <Link href="/">
                    <a>Voltar</a>
                </Link>
            </h2>
        </Layout>
    )
}