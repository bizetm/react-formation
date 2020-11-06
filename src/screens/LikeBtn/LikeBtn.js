import React, { useContext } from 'react';
import { RulesContext } from '../../RulesProvider';

function LikeBtn({ rule, title }) {
    const { doLike, doDislike } = useContext(RulesContext);
    const isUp = (title === '+1');
    const counter = isUp ? rule.likes : rule.dislikes;
    const icon = `glyphicon glyphicon-thumbs-${isUp ? 'up' : 'down'}`;

    const handleBtnClick = () => (
        isUp ? doLike(rule.id) : doDislike(rule.id)
    );

    return (
        <a className="btn btn-default" title={title} onClick={handleBtnClick}>
            {counter} <i className={icon} />
        </a>
    );
}

LikeBtn.defaultProps = {
    title: '',
    rule: {
        likes: 0,
        dislikes: 0
    }
}

export default LikeBtn;