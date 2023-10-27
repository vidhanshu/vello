import React from 'react';
import { Metadata } from 'next';

import LoginPage from '@/src/auth/components/login-page';

export const metadata: Metadata = {
    title: 'Log in - Log in with your account',
    description:
        'Log in to Jira, Confluence, and all other Atlassian Cloud products here. Not an Atlassian user? Sign up for free.',
};

const Login = () => {
    return <LoginPage />;
};

export default Login;
