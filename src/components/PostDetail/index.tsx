import Button from '../Button'
import Reactions from '../Reaction'
import Container from '../ui/Container'
import styles from './style.module.scss'

const PostDetail = () => {
    return (
        <Container>
            <div className={styles.header}>
                <Button type="back" />
                <Reactions />
            </div>
        </Container>
    )
}

export default PostDetail
