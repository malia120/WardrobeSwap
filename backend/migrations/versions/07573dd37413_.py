"""empty message

Revision ID: 07573dd37413
Revises: 
Create Date: 2024-03-02 19:01:20.384489

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '07573dd37413'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    with op.batch_alter_table('listing', schema=None) as batch_op:
        batch_op.add_column('listing', sa.Column('image', sa.String(length=255), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('listing', schema=None) as batch_op:
        batch_op.drop_column('image')

    # ### end Alembic commands ###