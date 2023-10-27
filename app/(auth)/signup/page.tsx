import React from 'react';
import { Metadata } from 'next';

import SignupPage from '@/src/auth/components/signup-page';

export const metadata: Metadata = {
    title: 'Sign up - Sign up for new account',
    description:
        'Log in to Jira, Confluence, and all other Atlassian Cloud products here. Not an Atlassian user? Sign up for free.',
};

const Signup = () => {
    return <SignupPage />;
};

export default Signup;
