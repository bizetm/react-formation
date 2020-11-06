import React, { createContext, useEffect, useState } from 'react';

export const RulesContext = createContext();

export function RulesProvider({ children }) {
    const [rules, setRules] = useState([]);
    console.log('rules', rules);

    useEffect(() => {
        fetch('/rest/rules', { headers: { Accept: 'application/json' } })
            .then(response => response.json())
            .then(rules => setRules(rules));
    }, []);

    const doLike = (id) => {
        const newRules = rules.map((rule) => {
            if (rule.id !== id) return rule
            return {
                ...rule,
                likes: rule.likes + 1
            }
        });

        setRules(newRules);
    }

    const doDislike = (id) => {
        const newRules = rules.map((rule) => {
            if (rule.id !== id) return rule
            return {
                ...rule,
                dislikes: rule.dislikes + 1
            }
        });

        setRules(newRules);
    }

    return (
        <RulesContext.Provider
            value={{
                rules,
                doLike,
                doDislike
            }}>
            {children}
        </RulesContext.Provider>
    )
}