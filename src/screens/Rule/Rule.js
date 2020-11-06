import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { shape, string, array, number } from 'prop-types';
import LikeBtn from '../LikeBtn';

import './Rule.css';

function Rule({ rule }) {
    const { title, description, tags, likes, dislikes } = rule;
    const [folded, setFolded] = useState(false);

    const handleTitleClick = () => (setFolded(!folded));

    return (
        <div className="panel panel-primary">
            <div className="panel-heading" role="presentation" onClick={handleTitleClick}>
                {title}
                <i className={classnames('pull-right glyphicon', { 'glyphicon-chevron-down': !folded, 'glyphicon-chevron-up': folded })} />
            </div>
            {description && (
                <div className={classnames('panel-body', { hidden: folded })}>
                    <p>{description}</p>
                </div>)
            }
            <div className="panel-footer">
                <div className="btn-toolbar">
                    {tags.map(tag => (
                        <span key={tag} className="badge">{tag}</span>)
                    )}
                    <div className="btn-group btn-group-xs pull-right">
                        <Link to={`/edit/${rule.id}`} className="btn btn-primary" title="Update">
                            <i className="glyphicon glyphicon-pencil" />
                        </Link>
                    </div>
                    <div className="btn-group btn-group-xs pull-right">
                        <LikeBtn rule={rule} title="+1" />
                        <LikeBtn rule={rule} title="-1" />
                    </div>
                </div>
            </div>
        </div>
    );
}

Rule.propTypes = {
    rule: shape({
        id: number.isRequired,
        title: string.isRequired,
        description: string,
        tags: array,
        likes: number,
        dislikes: number
    }).isRequired
}

Rule.defaultProps = {
    rule: {
        description: '',
        tags: [],
        likes: 0,
        dislikes: 0
    }
}

export default Rule;