import type { VoteType } from '../../types/votes';
import css from './VoteOptions.module.css';

interface VoteOptionsProps {
    onVote: (type: VoteType) => void;
    onReset: () => void;
    canReset: boolean;
}

const VoteOptions = ({ onVote, onReset, canReset}: VoteOptionsProps) => {
    return (
        <div className={css.container}>
            <button type="button" aria-label="Good" className={css.button} onClick={() => onVote('good')}>Good</button>
            <button type="button"  aria-label="Neutral" className={css.button} onClick={() => onVote('neutral')}>Neutral</button>
            <button type="button" aria-label="Bad" className={css.button} onClick={() => onVote('bad')} >Bad</button>
            {canReset &&
                <button type="button" aria-label="Reset" className={`${css.button} ${css.reset}`} onClick={() => onReset()}>
                Reset
              </button>}
        </div>)
}

export default VoteOptions;