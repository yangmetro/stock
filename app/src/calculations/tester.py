import numpy as np
from numpy.random import default_rng
np.set_printoptions(precision=5, suppress=True)
rng = default_rng(100)
B = (10, np.array((11, 11, 11)))
S = (10, np.array((20, 10, 5)))
n = 1000
b = rng.random(n)
b[:5]
s = rng.random(n)
A = [b[i] * B[1] + s[i] * S[1] for i in range(n)]
A = np.array(A)
A[:3]
from pylab import mpl, plt
plt.style.use('seaborn-v0_8-whitegrid')
mpl.rcParams['savefig.dpi'] = 300
mpl.rcParams['font.family'] = 'serif'
from mpl_toolkits.mplot3d import Axes3D
fig = plt.figure(figsize=(10, 6))
ax = fig.add_subplot(111, projection='3d')
ax.scatter(A[:, 0], A[:, 1], A[:, 2], c='r', marker='.')