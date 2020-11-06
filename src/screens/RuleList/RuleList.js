import React, { useEffect, useContext } from 'react';
import Rule from '../Rule';
import { RulesContext } from '../../RulesProvider';

function RuleList() {
    const { rules } = useContext(RulesContext);

    return (
        rules.map(rule => (
            <Rule key={rule.id} rule={rule} />
        ))
    );
}

RuleList.defaultProps = {
    rules: []
}

export default RuleList;