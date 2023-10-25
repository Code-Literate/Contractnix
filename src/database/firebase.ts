// cloud
import { getApp, getApps, initializeApp } from "firebase/app";
// analytics
import { getAnalytics } from "firebase/analytics";
// database
import {
	getFirestore,
	collection,
	addDoc,
	getDoc,
	getDocs,
	updateDoc,
	deleteDoc,
	doc,
	query,
	where,
} from "firebase/firestore";
// authentication
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	deleteUser,
	reauthenticateWithCredential,
	sendPasswordResetEmail,
	EmailAuthProvider,
} from "firebase/auth";
// storage
import {
	getStorage,
	ref,
	uploadBytes,
	deleteObject,
	uploadBytesResumable,
	getDownloadURL,
	listAll,
} from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyB0onU23zfK463wVfdUOxi_UENybHDDHH0",
	authDomain: "contractnix.firebaseapp.com",
	projectId: "contractnix",
	storageBucket: "contractnix.appspot.com",
	messagingSenderId: "193732234248",
	appId: "1:193732234248:web:47f8e8f7722651435195bd",
	measurementId: "G-L51J54FMD7",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// cloud storage
const storage = getStorage(app);

interface Aza {
	id?: string;
	accBank: string;
	title: string;
	type?: string;
	accName: string;
	accNo: string;
	thumbnail?: string | undefined;
	copies?: number;
	isVisible?: boolean;
	ownerId?: string;
}
interface IUser {
	id?: string;
	authId?: string;
	bio: string;
	email: string;
	name: string;
	phone: string;
	photo: string;
	username: string;
}

const signIn = async (email: string, password: string) => {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		let user = await getUser(userCredential.user.uid);
		return user;
	} catch (error) {
		throw error;
	}
};

const signInWithGoogle = async () => {
	try {
		let result = await signInWithPopup(auth, googleProvider);
		// This gives you a Google Access Token. You can use it to access the Google API.
		const credential = GoogleAuthProvider.credentialFromResult(result);
		const token = credential?.accessToken;
		// The signed-in user info.
		const user = result.user;

		const userData = {
			authId: user?.uid,
			username: user?.displayName
				?.trim()
				.toLowerCase()
				.split(" ")
				.join("-"),
			email: user?.email,
			name: user?.displayName,
			phone: user?.phoneNumber,
			bio: "",
			photo: "",
			accounts: [],
		};
		let regUser = await addNewUser(userData);
		return regUser;
	} catch (error) {
		throw error;
	}
};

const register = async (username: string, email: string, password: string) => {
	try {
		// Check if a user with the same email exists in the collection
		const emailQuerySnapshot = await getDocs(
			query(collection(db, "users"), where("email", "==", email))
		);

		// Check if a user with the same username exists in the collection
		const usernameQuerySnapshot = await getDocs(
			query(collection(db, "users"), where("username", "==", username))
		);

		if (emailQuerySnapshot.size === 0 && usernameQuerySnapshot.size === 0) {
			// No user with the same email or username, proceed to add the new user
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const userData = {
				authId: userCredential.user.uid,
				username,
				email,
				name: "",
				phone: "",
				bio: "",
				photo: "",
			};
			let regUser = await addNewUser(userData);
			return regUser;
		} else {
			// User with the same email or username already exists
			if (emailQuerySnapshot.size > 0) {
				console.log("User with the same email already exists.");
				throw new Error("User with the same email already exists.");
			}
			if (usernameQuerySnapshot.size > 0) {
				console.log("User with the same username already exists.");
				throw new Error("User with the same username already exists.");
			}
			return null; // You may return an error message or handle it differently
		}
	} catch (error) {
		throw error;
	}
};

const session = () => {
	return new Promise((resolve, reject) => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				resolve(user);
			} else {
				resolve(null);
			}
		});
	});
};

const logOut = async () => {
	try {
		await signOut(auth);
		return true;
	} catch (error) {
		throw error;
	}
};

/**
 *
 * ** FIRESTORE
 *
 */
const addNewUser = async (userData: any) => {
	try {
		const docRef = await addDoc(collection(db, "users"), userData);
		// console.log("Document written with ID: ", docRef.id);

		// Retrieve the document and access its data
		const docSnapshot = await getDoc(docRef);
		if (docSnapshot.exists()) {
			const data = docSnapshot.data();
			// console.log("Document data: ", data);
			return { ...data, id: docRef.id, accounts: [] };
		} else {
			console.log("No such document!");
			return null;
		}
	} catch (e) {
		console.error("Error adding document: ", e);
		throw e;
	}
};

// const addNewUser = async (userData: any) => {
//   try {
//     const email = userData.email;
//     const username = userData.username;

//     // Check if a user with the same email exists in the collection
//     const emailQuerySnapshot = await getDocs(query(collection(db, "users"), where("email", "==", email)));

//     // Check if a user with the same username exists in the collection
//     const usernameQuerySnapshot = await getDocs(query(collection(db, "users"), where("username", "==", username)));

//     if (emailQuerySnapshot.size === 0 && usernameQuerySnapshot.size === 0) {
//       // No user with the same email or username, proceed to add the new user
//       const docRef = await addDoc(collection(db, "users"), userData);
//       const docSnapshot = await getDoc(docRef);

//       if (docSnapshot.exists()) {
//         const data = docSnapshot.data();
//         return { ...data, id: docRef.id, accounts: [] };
//       } else {
//         console.log("No such document!");
//         return null;
//       }
//     } else {
//       // User with the same email or username already exists
//       if (emailQuerySnapshot.size > 0) {
//         console.log("User with the same email already exists.");
//       }
//       if (usernameQuerySnapshot.size > 0) {
//         console.log("User with the same username already exists.");
// 		throw new Error('User with the same username already exists.')
//       }
//       return null; // You may return an error message or handle it differently
//     }
//   } catch (e) {
//     console.error("Error adding document: ", e);
//     throw e;
//   }
// };

const getUser = async (id: string) => {
	const querySnapshot = await getDocs(collection(db, "users"));
	let userData: IUser | null = null;

	for (const doc of querySnapshot.docs) {
		const data = doc.data() as IUser;
		if (data && data.authId === id) {
			userData = { id: doc.id, ...data };
			break; // Exit the loop once the user is found
		}
	}

	if (userData) {
		const accounts = await getUserAccounts(userData?.id);
		return { accounts, ...userData };
	} else {
		throw new Error("User not found!");
	}
};

const getUserByTag = async (tag: string) => {
	const querySnapshot = await getDocs(collection(db, "users"));
	let userData: IUser | null = null;

	for (const doc of querySnapshot.docs) {
		const data = doc.data() as IUser;
		if (data && data.username === tag) {
			userData = { id: doc.id, ...data };
			break; // Exit the loop once the user is found
		}
	}

	if (userData) {
		const accounts = await getUserAccounts(userData?.id);
		return { accounts, ...userData };
	} else {
		throw new Error("User not found!");
	}
};

const getUserAccounts = async (id: string | undefined) => {
	const querySnapshot = await getDocs(
		query(collection(db, "accounts"), where("ownerId", "==", id))
	);

	const userAccounts: Aza[] = [];

	querySnapshot.forEach((doc) => {
		const accountData = { id: doc.id, ...doc.data() } as Aza;
		// Check if the 'isVisible' field is true before adding to the array
		// if (accountData.isVisible === true) {
		userAccounts.push(accountData);
		// }
	});

	return userAccounts;
};

const updateUser = async (id: string, data: any) => {
	try {
		const docRef = doc(db, "users", id);

		// Update the document
		await updateDoc(docRef, data);

		// Retrieve the updated user document
		const userDoc = await getDoc(docRef);

		if (userDoc.exists()) {
			return userDoc.data();
		} else {
			throw new Error("User document not found after update.");
		}
	} catch (e) {
		console.error("Error updating document: ", e);
		throw e;
	}
};

const resetPassword = async (email: string) => {
	sendPasswordResetEmail(auth, email)
		.then(() => {
			// Password reset email sent!
			return true;
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(error);
		});
};

const deleteUserAccountAndData = async (
	userId: string,
	email: string,
	password: string
) => {
	try {
		// known issue: reauthenticate user
		const user = auth.currentUser;

		// TODO(you): prompt the user to re-provide their sign-in credentials
		const credential = EmailAuthProvider.credential(email, password);

		// User re-authenticated
		await reauthenticateWithCredential(user as any, credential as any);

		// delete the user storage assets and resources
		await deleteAvatarFolder(`avatars/${userId}`);

		// first delete all user accounts documents in 'accounts' collection
		let userAccounts = await getUserAccounts(userId);
		userAccounts.forEach(async (userAccount) => {
			await deleteAccountDocument(userId, userAccount?.id as string);
		});
		console.log("done deleting user accounts");

		// then delete the user account document in 'users' collection
		await deleteUserDocument(userId);
		console.log("done removing user account");

		// finally delete the user authentication entity
		console.log("current user", user);
		await deleteUser(user as any);
		console.log("user terminated completely");
	} catch (err) {
		console.log(err);
		throw err;
	}
};

const deleteUserDocument = async (userId: string) => {
	try {
		// Delete the document if it matches the provided owner ID
		await deleteDoc(doc(db, "users", userId));
		console.log(`Document ${userId} deleted successfully.`);
		return true;
	} catch (error) {
		console.error("Error deleting document:", error);
	}
};

/*
 **
 ** ACCOUNT
 **
 */
const addNewAccount = async (accountData: Aza) => {
	try {
		const docRef = await addDoc(collection(db, "accounts"), accountData);
		// console.log("Document written with ID: ", docRef.id);

		// Retrieve the document and access its data
		const docSnapshot = await getDoc(docRef);
		if (docSnapshot.exists()) {
			const data = docSnapshot.data();
			// console.log("Document data: ", data);
			return { ...data, id: docRef.id };
		} else {
			console.log("No such document!");
			return null;
		}
	} catch (e) {
		console.error("Error adding document: ", e);
		throw e;
	}
};

const updateAccount = async (id: string, data: any) => {
	try {
		const docRef = doc(db, "accounts", id);

		// Update the document
		await updateDoc(docRef, data);

		// Retrieve the updated user document
		const accountDoc = await getDoc(docRef);

		if (accountDoc.exists()) {
			return { id, ...accountDoc.data() };
		} else {
			throw new Error("Account document not found after update.");
		}
	} catch (e) {
		console.error("Error updating document: ", e);
		throw e;
	}
};

const deleteAccountDocument = async (ownerId: string, documentId: string) => {
	try {
		// Delete the document if it matches the provided owner ID
		await deleteDoc(doc(db, "accounts", documentId));
		console.log(`Document ${documentId} deleted successfully.`);
		return true;
	} catch (error) {
		console.error("Error deleting document:", error);
	}
};

/*
 **
 ** RESOURCES / ASSETS
 **
 */

const uploadAvatar = (file: File, userId: string): Promise<string> => {
	return new Promise(async (resolve, reject) => {
		try {
			// Create a storage reference from our storage service with user-specific path
			const storageRef = ref(storage, `avatars/${userId}/${file.name}`);

			// Upload the file and get the snapshot
			const uploadTask = uploadBytesResumable(storageRef, file);

			// Register three observers...
			uploadTask.on(
				"state_changed",
				(snapshot) => {
					// ... (same as before)
				},
				(error) => {
					// Handle unsuccessful uploads
					reject(error); // Reject the promise with the error
				},
				async () => {
					// Handle successful uploads on complete
					const downloadURL = await getDownloadURL(
						uploadTask.snapshot.ref
					);
					// console.log("File available at", downloadURL);
					await updateUser(userId as string, { photo: downloadURL });
					resolve(downloadURL); // Resolve the promise with the download URL
				}
			);
		} catch (error) {
			console.error("Upload error:", error);
			reject(error); // Reject the promise with the error
		}
	});
};

const removeAvatar = async (path: string, userId: string) => {
	try {
		// Create a reference to the file to delete
		const storageRef = ref(storage, path);
		// Delete the file
		await deleteObject(storageRef);
		await updateUser(userId as string, { photo: null });
		// console.log("File deleted successfully");
		return true;
	} catch (error) {
		console.error("File deletion error:", error);
		throw error;
	}
};

const deleteAvatarFolder = async (folderPath: string) => {
	try {
		const folderRef = ref(storage, folderPath);
		const { items, prefixes } = await listAll(folderRef);

		// Delete all items in the folder
		await Promise.all(
			items.map(async (item) => {
				await deleteObject(item);
			})
		);
		console.log("Folder and its contents deleted successfully");
		return true;
	} catch (error) {
		console.error("Folder deletion error:", error);
	}
};

export {
	signIn,
	signInWithGoogle,
	session,
	register,
	logOut,
	addNewUser,
	updateUser,
	resetPassword,
	deleteUserAccountAndData,
	addNewAccount,
	updateAccount,
	deleteAccountDocument,
	getUserByTag,
	removeAvatar,
	uploadAvatar,
	deleteAvatarFolder,
};
